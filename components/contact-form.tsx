/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BuJAVzc071a
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


export default function Contact() {
    return (
     
        <div className="max-w-lg mx-auto my-10">
    <form className="grid gap-6">
        <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Name *</label>
            <div className="mt-1 grid grid-cols-2 gap-4">
                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="first-name" placeholder="First" />
                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="last-name" placeholder="Last" />
            </div>
        </div>
        <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company *</label>
            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="company" placeholder="" />
        </div>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="" type="email" />
        </div>
        <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
            <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="phone" placeholder="" type="tel"/>
        </div>
        <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700">I'm interested in *</label>
            <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="interest" placeholder="Collaboration" maxLength={32}></textarea>
            <p className="mt-1 text-sm text-gray-500">13 of 32 max characters</p>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">SUBMIT</button>
    </form>
</div>
    )
}

