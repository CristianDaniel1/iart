type ErrorMessageProps = {
  title: string;
  message: string;
};

export const ErrorMessage = ({ title, message }: ErrorMessageProps) => {
  return (
    <div className="my-4 p-4 border-2 border-red-900 text-center max-w-sm mx-auto rounded-md">
      <h2 className="text-xl sm:text-2xl m-2 text-red-300">{title}</h2>
      <p className="text-lg text-slate-200">{message}</p>
    </div>
  );
};
