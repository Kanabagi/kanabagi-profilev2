import { VscLoading } from 'react-icons/vsc';

export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-50 w-full flex items-center justify-center z-[100]">
      <VscLoading className="animate-spin w-10 h-10 text-[#00a2df]" />
    </div>
  );
}
