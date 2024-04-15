export default function Alert({
  status,
  message,
  Icon,
  iconColor,
  borderColor,
  onClick,
}: {
  status: string;
  message: string;
  Icon: any;
  iconColor: string;
  borderColor: string;
  onClick: () => void;
}) {
  return (
    <>
      <div
        className={`fixed z-50 bottom-5 left-5 w-72 md:w-96 flex justify-between items-center shadow-[0_0_10px_0_rgba(0,0,0,0.3)] bg-white border-l-4 ${borderColor} px-4 py-4 rounded-xl`}
      >
        <div className="flex items-center gap-4">
          <Icon size={25} className={`${iconColor}`} />
          <div className="text-base text-gray-950">
            <span className="font-bold">{status}</span> {message}
          </div>
        </div>
        <button onClick={onClick}>✖</button>
      </div>
    </>
  );
}
