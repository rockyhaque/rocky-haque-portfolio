import { fetchContacts } from '@/actions/serverActions';
import React from 'react';

const MessagePage = async () => {
    const { data: contacts, error } = await fetchContacts();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Messages</h1>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            {contacts && contacts.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-slate-900 border border-gray-200 rounded-lg">
                        <thead>
                            <tr className="bg-gradient-to-r from-sky-900 to-slate-900 ">
                                <th className="py-3 px-4 border-b text-left">Name</th>
                                <th className="py-3 px-4 border-b text-left">Email</th>
                                <th className="py-3 px-4 border-b text-left">Message</th>
                                <th className="py-3 px-4 border-b text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <tr key={contact._id} className="hover:bg-gray-800">
                                    <td className="py-3 px-4 border-b">{contact.name}</td>
                                    <td className="py-3 px-4 border-b">{contact.email}</td>
                                    <td className="py-3 px-4 border-b">{contact.message || "No message"}</td>
                                    <td className="py-3 px-4 border-b">
                                        {contact.createdAt ? new Date(contact.createdAt).toLocaleString() : "N/A"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-500 text-center">No contact messages found.</p>
            )}
        </div>
    );
};

export default MessagePage;
