import Card from '@/components/home/card';

export default function Home() {
  return (
    <div className="my-8 mx-5">
      <h2 className="text-xl">Good morning, Yashna!</h2>
      <p className="text-xs">Evaluate Your Investment Performance</p>

      <div className="my-4 flex gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
