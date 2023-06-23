import Image from 'next/image';

export function NotFound() {
  return (
    <>
      <Image
        src="/assets/notFound.png"
        alt="Green portal gif spinning"
        width={500}
        height={500}
      />
    </>
  );
}
