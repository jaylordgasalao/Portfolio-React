export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Thank you for reaching out! I will get back to you soon.");
  };

  return (
    <div className="border-t border-[#dce5df] pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
      <h3 className="text-2xl font-bold text-[#1d2927]">Send a message</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-[#60706a]">
        Tell me a little about what you’re working on and I’ll get back to you soon.
      </p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fname" className="block text-sm font-medium text-[#1d2927]">
              Name
            </label>
            <input
              id="fname"
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-[#dce5df] bg-[#f6f8f5] px-4 py-3 text-sm text-[#1d2927] placeholder:text-[#71807a] outline-none transition focus:border-[#176b63] focus:bg-white focus:ring-2 focus:ring-[#c9ddd4]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1d2927]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-[#dce5df] bg-[#f6f8f5] px-4 py-3 text-sm text-[#1d2927] placeholder:text-[#71807a] outline-none transition focus:border-[#176b63] focus:bg-white focus:ring-2 focus:ring-[#c9ddd4]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1d2927]">
              Your message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows={5}
              className="mt-2 w-full resize-y rounded-lg border border-[#dce5df] bg-[#f6f8f5] px-4 py-3 text-sm text-[#1d2927] placeholder:text-[#71807a] outline-none transition focus:border-[#176b63] focus:bg-white focus:ring-2 focus:ring-[#c9ddd4]"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-[#1d2927] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#176b63]"
          >
            Send message
          </button>
      </form>
    </div>
  );
}