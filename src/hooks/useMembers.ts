import { useState, useEffect } from "react";
import type { Member } from "@/types/member";

function useMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMembers() {
      try {
        setLoading(true);
        setError(null);

        const membersData = await import("@/data/members.json");

        setMembers(membersData.default as Member[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        console.error("Fehler beim Laden der Members:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

  return { members, loading, error };
}

export { useMembers };
