'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({ text = 'Submit' }) {
    const { pending } = useFormStatus();
    return (
        <button
            className={`px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-yellow-400 hover:text-black transition-colors ${
                pending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={pending}
        >
            {pending ? 'Submitting...' : text}
        </button>
    );
}
