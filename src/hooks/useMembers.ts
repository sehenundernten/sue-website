import { useState, useEffect } from "react";
import type { Member } from "@/types/member";

// Simulierte API-Verzögerung
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function useMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMembers() {
      try {
        setLoading(true);
        setError(null);

        // Simuliere API-Verzögerung
        await delay(1000);

        // Importiere die JSON-Datei (simuliert API-Call)
        const membersData = await import("@/data/members.json");

        // Simuliere gelegentliche Fehler (für Testing)
        if (Math.random() < 0.1) {
          throw new Error("Simulierter API-Fehler");
        }

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
