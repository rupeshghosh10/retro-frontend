interface FormTitleProps {
  title: string;
  subtitle: string;
}

const FormTitle = ({ title, subtitle }: FormTitleProps) => {
  return (
    <div className="prose">
      <h1>{title}</h1>
      <p className="text-xl">{subtitle}</p>
    </div>
  );
};

export default FormTitle;
