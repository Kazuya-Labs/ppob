export interface CardUserTypes {
  data: {
    saldo: number | 0;
    totalSpent: number;
    point: number;
    role:
      | "bronze"
      | "platinum"
      | "gold"
      | "diamond"
      | "vip"
      | "premium"
      | string;
  };
}

export interface HeadersUserProps {
  data: { name: string; profil: string };
}
