type Message = { message: string };

export const LoadingMessage = ({ message }: Message) => {
  return (
    <p className="text-center text-xl text-primary-light m-4">{message}</p>
  );
};
