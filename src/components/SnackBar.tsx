import { XMarkIcon } from '@heroicons/react/24/outline';

interface SnackbarProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Snackbar = ({ message, isVisible, onClose }: SnackbarProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="toast toast-center toast-top">
      <div className="alert alert-info flex items-center gap-2">
        <span>{message}</span>
        <button onClick={onClose} className="btn btn-ghost btn-xs">
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
