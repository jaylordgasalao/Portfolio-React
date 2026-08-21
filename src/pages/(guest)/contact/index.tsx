import { ContactHeader } from "../../../components/features/contact/ContactHeader";
import { ContactInfo } from "../../../components/features/contact/ContactInfo";
import { ContactForm } from "../../../components/features/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="py-6 md:py-10">
      <ContactHeader />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}