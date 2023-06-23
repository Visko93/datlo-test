import Image from 'next/image';

export function Initial() {
  return (
    <>
      <Image
        src="/assets/initial.png"
        alt="Initial Ricky and Morty inside a green portal with code reader"
        width={500}
        height={500}
      />
    </>
  );
}
