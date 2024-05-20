export interface BudgetItem {
    id: number;
    description: string;
    amount: number;
    category: string;
}

export const categories = ["Leases","Subscriptions","Utilities","Groceries"] as const;