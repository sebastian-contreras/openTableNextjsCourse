import Navbar from "@/app/components/Navbar";
import Form from "./components/Form";
import Header from "./components/Header";
import { Metadata, ResolvingMetadata } from 'next'


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // read route params
  const name = params.slug
  return {
    title: "Reserve at " + name
  }
}



function ReservationPage() {
  return (
<>
        {/* NAVBAR END */}
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
           <Header/>
            {/* HEADER */} {/* FORM */}
           <Form/>
          </div>
        </div>
</>
  );
}

export default ReservationPage;
