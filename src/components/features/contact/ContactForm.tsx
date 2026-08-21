export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Thank you for reaching out! I will get back to you soon.");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-semibold text-slate-900">Reach Out!</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Whether you’re looking to collaborate or just want to chat, I’d love to hear from you.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="fname" className="block text-sm font-medium text-slate-700">
                  First Name
                </label>
                <input
                  id="fname"
                  type="text"
                  placeholder="First name"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label htmlFor="lname" className="block text-sm font-medium text-slate-700">
                  Last Name
                </label>
                <input
                  id="lname"
                  type="text"
                  placeholder="Last name"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                How can I help you?
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                rows={5}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Send Message
            </button>
          </form>
    </div>
  );
}