import React, { useState } from 'react';
import { Calculator, IndianRupee, ShieldCheck } from 'lucide-react';

export const EMICalculator: React.FC = () => {
  // Loan amount in Lakhs (default 250 Lakhs = 2.5 Cr)
  const [loanAmountLakhs, setLoanAmountLakhs] = useState<number>(250);
  // Interest rate per annum in %
  const [interestRate, setInterestRate] = useState<number>(8.5);
  // Tenure in years
  const [tenureYears, setTenureYears] = useState<number>(20);

  const principal = loanAmountLakhs * 100000;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  // Formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const emi =
    monthlyRate > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : principal / totalMonths;

  const totalAmountPayable = emi * totalMonths;
  const totalInterestPayable = totalAmountPayable - principal;
  const principalPercentage = Math.round((principal / totalAmountPayable) * 100) || 50;
  const interestPercentage = 100 - principalPercentage;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="emi-calc" className="w-full bg-neutral-900 text-white py-16 sm:py-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Financial Planning & Mortgages</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Home Loan & Mortgage EMI Calculator
          </h2>
          <p className="text-sm text-neutral-300">
            Calculate your estimated monthly commitments and loan eligibility with major partner banks (HDFC, ICICI, SBI).
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950 p-6 sm:p-10 rounded-2xl border border-neutral-800 shadow-xl">
          {/* Sliders Column */}
          <div className="lg:col-span-7 space-y-6 text-xs">
            {/* Loan Amount Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-neutral-300 uppercase tracking-wider text-[11px]">
                  Loan Amount
                </span>
                <span className="font-display text-base font-bold text-amber-400 tabular-nums">
                  {loanAmountLakhs >= 100
                    ? `₹${(loanAmountLakhs / 100).toFixed(2)} Cr`
                    : `₹${loanAmountLakhs} Lakhs`}
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={1000}
                step={5}
                value={loanAmountLakhs}
                onChange={(e) => setLoanAmountLakhs(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>₹20 Lakhs</span>
                <span>₹5 Crores</span>
                <span>₹10 Crores</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-neutral-300 uppercase tracking-wider text-[11px]">
                  Interest Rate (p.a.)
                </span>
                <span className="font-display text-base font-bold text-amber-400 tabular-nums">
                  {interestRate.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min={7.0}
                max={12.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>7.0%</span>
                <span>8.5% (Avg.)</span>
                <span>12.0%</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-neutral-300 uppercase tracking-wider text-[11px]">
                  Loan Tenure
                </span>
                <span className="font-display text-base font-bold text-amber-400 tabular-nums">
                  {tenureYears} Years ({totalMonths} Months)
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-neutral-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>5 Years</span>
                <span>20 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Bank Approvals Note */}
            <div className="pt-2 flex items-center gap-2 text-[11px] text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Pre-approved projects eligible for up to 80% financing from SBI, HDFC, ICICI & Axis Bank.
              </span>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-neutral-900/90 p-6 rounded-xl border border-neutral-700 space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                Estimated Monthly EMI
              </span>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-amber-400 tabular-nums mt-1">
                {formatCurrency(emi)}
              </div>
              <span className="text-[10px] text-neutral-500">Per month for {tenureYears} years</span>
            </div>

            <div className="space-y-2 pt-3 border-t border-neutral-800 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-400">Principal Amount</span>
                <span className="font-bold text-neutral-200 tabular-nums">{formatCurrency(principal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Total Interest</span>
                <span className="font-bold text-neutral-200 tabular-nums">
                  {formatCurrency(totalInterestPayable)}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-800 font-bold text-sm">
                <span className="text-white">Total Amount</span>
                <span className="text-amber-400 tabular-nums">{formatCurrency(totalAmountPayable)}</span>
              </div>
            </div>

            {/* Visual Ratio Bar */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-[10px] text-neutral-400">
                <span>Principal ({principalPercentage}%)</span>
                <span>Interest ({interestPercentage}%)</span>
              </div>
              <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden flex">
                <div style={{ width: `${principalPercentage}%` }} className="h-full bg-amber-500" />
                <div style={{ width: `${interestPercentage}%` }} className="h-full bg-neutral-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
