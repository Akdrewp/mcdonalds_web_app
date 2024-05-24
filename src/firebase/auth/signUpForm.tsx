'use client'

export default function SignUpForm({
    createAccount 
} : {
    createAccount: React.FormEventHandler<HTMLFormElement>
}) {
    return (
        <form onSubmit={createAccount} className="flex flex-col">
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    className="border rounded-sm" 
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type="text" 
                    id="password" 
                    name="password" 
                    className="border rounded-sm" 
                />
                <button type="submit">
                    Create account
                </button>
        </form>
    )
}