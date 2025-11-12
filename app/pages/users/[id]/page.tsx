// src/app/pages/users/[id].tsx
import { useParams } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams<{ id: string }>();

  // Example: fetch user data here
  // const user = useUser(id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p className="text-lg">
        Viewing user with ID: <span className="font-mono bg-gray-content px-2 py-1 rounded">{id}</span>
      </p>
      {/* Add user details, loading state, etc. */}
    </div>
  );
}
