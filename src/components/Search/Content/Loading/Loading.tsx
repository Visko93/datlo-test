import Image from 'next/image';

export function Loading() {
  return (
    <>
      <Image
        src="/assets/loading.gif"
        alt="Green portal gif spinning"
        width={500}
        height={500}
      />
    </>
  );
}
