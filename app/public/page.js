"use client";

import { PageLayout } from "../components/page-layout";

const Public = () => {

  const transactions = [
    { date: "2025-03-05", description: "Payment to John Doe", amount: "$200.00", status: "Completed" },
    { date: "2025-02-28", description: "Payment from Jane Smith", amount: "$150.00", status: "Completed" },
    { date: "2025-02-25", description: "Payment to ABC Corp", amount: "$50.00", status: "Completed" },
    { date: "2025-02-20", description: "Payment from XYZ Ltd", amount: "$300.00", status: "Completed" },
    { date: "2025-02-15", description: "Payment to DEF Inc", amount: "$75.00", status: "Completed" },
    { date: "2025-01-10", description: "Payment from GHI LLC", amount: "$250.00", status: "Completed" },
    { date: "2025-01-05", description: "Payment to JKL Ltd", amount: "$100.00", status: "Completed" },
    { date: "2025-01-01", description: "Payment from MNO Corp", amount: "$400.00", status: "Completed" },
  ];

  return (
    <PageLayout>
      <main className="transactions-page">
      <section className="transactions-header">
        <h2>Your Transactions</h2>
        <p>View and manage all your transactions in one place.</p>
      </section>

      <section className="transactions-content">
        <h3>Recent Transactions</h3>
        <div className="transactions-table-wrapper">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td className="status-text">{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="transactions-filter">
        <h3>Filter Transactions</h3>
        <form className="filter-form">
          <input type="date" className="filter-date" placeholder="Start Date" />
          <input type="date" className="filter-date" placeholder="End Date" />
          <select className="filter-select">
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
          <button type="submit" className="filter-button">Filter</button>
        </form>
      </section>
    </main>
    </PageLayout>
  );
};

export default Public;
