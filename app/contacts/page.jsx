import ContactForm from "@/components/ContactForm";
import Contacts from "@/public/assets/contacts.svg";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 flex items-center justify-evenly">
      <div>
        <Image src={Contacts} alt="Contacts" width={500} height={500} />
      </div>
      <ContactForm />
    </div>
  );
}
