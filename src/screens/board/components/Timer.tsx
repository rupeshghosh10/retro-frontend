import { useEffect, useState } from 'react';
import { useSubscription } from 'react-stomp-hooks';
import { useShallow } from 'zustand/shallow';
import { getTimerState, startTimer, stopTimer } from '@/api/board';
import { TimerResponse } from '@/api/responses/TimerResponse';
import useBoardStore from '@/store/useBoardStore';

interface TimerProps {
  onTimerEnd: (message: string) => void;
}

const Timer = ({ onTimerEnd }: TimerProps) => {
  const [boardId] = useBoardStore(useShallow(x => [x.boardId]));
  const [timerState, setTimerState] = useState<TimerResponse>({
    status: 'NO_TIMER',
    remainingSeconds: 0,
    formattedTime: '00:00',
  });
  const [showDurationInput, setShowDurationInput] = useState(false);
  const [duration, setDuration] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimerState = async () => {
      try {
        const state = await getTimerState(boardId);
        setTimerState(state);
      } catch (error) {
        setError((error as Error).message);
      }
    };
    fetchTimerState();
  }, [boardId]);

  // WebSocket subscription for timer updates
  useSubscription(`/topic/board/${boardId}/timer`, message => {
    const timerUpdate = JSON.parse(message.body) as TimerResponse;
    setTimerState(timerUpdate);

    if (timerUpdate.status === 'TIMER_COMPLETE') {
      onTimerEnd('The timer has ended.');
    }
  });

  const handleStartTimer = () => {
    setShowDurationInput(true);
    setError(null);
  };

  const handleDurationSubmit = async () => {
    const minutes = parseInt(duration);
    if (!isNaN(minutes) && minutes >= 2 && minutes <= 60) {
      try {
        const state = await startTimer(boardId, minutes);
        setTimerState(state);
        setShowDurationInput(false);
        setError(null);
      } catch (error) {
        setError((error as Error).message);
      }
    }
  };

  const handleStopTimer = async () => {
    try {
      await stopTimer(boardId);
      const state = await getTimerState(boardId);
      setTimerState(state);
      onTimerEnd('The timer has been stopped.');
      setError(null);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <div className="flex items-center gap-4">
        {timerState.status !== 'NO_TIMER' && (
          <span className="text-xl font-semibold">{timerState.formattedTime}</span>
        )}
        <div className="space-x-2">
          {timerState.status === 'NO_TIMER' && !showDurationInput && (
            <button className="btn btn-primary btn-sm" onClick={handleStartTimer}>
              Start Timer
            </button>
          )}
          {showDurationInput && timerState.status === 'NO_TIMER' && (
            <div className="flex flex-col gap-1">
              <div className="join">
                <input
                  type="number"
                  min="2"
                  max="60"
                  placeholder="Minutes"
                  className="input input-sm join-item input-bordered w-24"
                  value={duration}
                  onChange={e => {
                    const val = parseInt(e.target.value);
                    if (!val || (val >= 2 && val <= 60)) {
                      setDuration(e.target.value);
                    }
                  }}
                />
                <button
                  className="btn btn-primary join-item btn-sm"
                  onClick={handleDurationSubmit}
                  disabled={!duration || parseInt(duration) < 2 || parseInt(duration) > 60}
                >
                  Set
                </button>
              </div>
              <span className="text-xs text-gray-500">Enter between 2-60 minutes</span>
            </div>
          )}
          {timerState.status === 'TIMER_UPDATE' && (
            <button className="btn btn-error btn-sm" onClick={handleStopTimer}>
              Stop Timer
            </button>
          )}
        </div>
      </div>
      {error && <div className="text-sm text-error">{error}</div>}
    </div>
  );
};

export default Timer;
