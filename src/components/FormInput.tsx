interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const FormInput = ({ id, label, placeholder, value, onChange }: InputProps) => {
  return (
    <div className="mt-10 flex flex-col">
      <label htmlFor="boardName" className="pl-1 text-lg font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        className="input input-bordered mt-2 w-full"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
