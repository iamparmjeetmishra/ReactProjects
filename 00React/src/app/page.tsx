import Link from "next/link";
import { UseEffectHook} from '../components/hooks'


export default function Home() {
  return (
    <section>
      <div className="flex flex-col items-center p-4 border-b-2">
        <h2 className="text-2xl font-bold ">React Gem</h2>
        <p>All React Learning Concepts</p>
      </div>
      <div className="flex gap-2 justify-center h-screen">
        <Link href='/hooks' >Hooks</Link>
        <Link href='/sfunctions' >Small Functions</Link>
        <UseEffectHook />
      </div>
    </section>
  );
}
