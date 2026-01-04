'use client';

import { BentoCard } from "@/components/dashboard/bento-card";
import { ArrowRight, ChevronDown, Sparkles, Users, Calendar, TrendingUp, AlertCircle } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Top Section - Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Review Action */}
        <BentoCard className="bg-[var(--mathical-secondary)] p-6 min-h-[160px] flex flex-col justify-between" delay={0.1}>
          <div className="text-[var(--mathical-text-light)]/80 text-xs font-bold tracking-widest uppercase mb-2">
            Quick Review
          </div>
          <div className="flex gap-4">
            <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center justify-between text-white font-medium cursor-pointer hover:bg-white/30 transition-colors">
              Pending Approvals
              <ChevronDown className="w-5 h-5" />
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-white font-bold cursor-pointer hover:bg-white/30 transition-colors">
              VIEW
            </div>
          </div>
        </BentoCard>

        {/* AI Assistant Search */}
        <BentoCard className="bg-[var(--mathical-secondary)] p-6 min-h-[160px] flex flex-col justify-between" delay={0.2}>
          <div className="text-[var(--mathical-text-light)]/80 text-xs font-bold tracking-widest uppercase mb-2">
            Ask AI about HR metrics
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Generate report for Q4 hiring trends..." 
              className="w-full bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 pr-12 text-white placeholder:text-white/60 font-medium outline-none focus:bg-white/30 transition-colors"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--mathical-accent)] p-1.5 rounded-lg text-white">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </BentoCard>
      </div>

      {/* Stats Row - HR Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <BentoCard className="bg-[var(--mathical-card-yellow)] p-4 text-[var(--mathical-text-dark)]" delay={0.3}>
          <div className="text-xs font-bold uppercase opacity-60 mb-2">Total Employees</div>
          <div className="flex items-end gap-2">
            <div className="text-2xl font-black">1,248</div>
            <div className="text-xs font-bold bg-black/10 px-1.5 py-0.5 rounded text-black/60 mb-1">+5.2%</div>
          </div>
        </BentoCard>
        <BentoCard className="bg-[var(--mathical-card-yellow)] p-4 text-[var(--mathical-text-dark)]" delay={0.35}>
          <div className="text-xs font-bold uppercase opacity-60 mb-2">New Hires</div>
          <div className="text-2xl font-black">12</div>
        </BentoCard>
        <BentoCard className="bg-[var(--mathical-card-yellow)] p-4 text-[var(--mathical-text-dark)]" delay={0.4}>
          <div className="text-xs font-bold uppercase opacity-60 mb-2">On Leave</div>
          <div className="text-2xl font-black">45</div>
        </BentoCard>
        <BentoCard className="bg-[var(--mathical-card-yellow)] p-4 text-[var(--mathical-text-dark)]" delay={0.45}>
          <div className="text-xs font-bold uppercase opacity-60 mb-2">Open Roles</div>
          <div className="flex items-end gap-2">
             <div className="text-2xl font-black">8</div>
             <div className="text-xs font-bold bg-black/10 px-1.5 py-0.5 rounded text-black/60 mb-1">Urgent</div>
          </div>
        </BentoCard>
        <BentoCard className="bg-[var(--mathical-card-yellow)] p-4 text-[var(--mathical-text-dark)]" delay={0.5}>
          <div className="text-xs font-bold uppercase opacity-60 mb-2">Retention Rate</div>
          <div className="text-2xl font-black">94%</div>
        </BentoCard>
      </div>

      {/* Main Grid - Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-[500px]">
        {/* Employee Satisfaction Projection */}
        <BentoCard className="lg:col-span-4 bg-[var(--mathical-card-yellow)] p-6 text-[var(--mathical-text-dark)] flex flex-col" delay={0.6}>
          <div className="flex justify-between items-start mb-6">
            <div>
               <div className="text-xs font-bold uppercase opacity-60">Quarterly Trends</div>
               <div className="text-2xl font-black mt-1 leading-none">EMPLOYEE SATISFACTION</div>
            </div>
            <div className="p-2 hover:bg-black/5 rounded-full cursor-pointer">
                <div className="w-1 h-1 bg-black rounded-full mb-0.5"></div>
                <div className="w-1 h-1 bg-black rounded-full mb-0.5"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
          </div>
          
          {/* Abstract Chart Area */}
          <div className="flex-1 flex items-end gap-2 justify-between px-2 pb-2">
             <div className="w-1/6 bg-[#E8E6D1] rounded-t-full h-[60%] relative group"></div>
             <div className="w-1/6 bg-[#E8E6D1] rounded-t-full h-[70%] relative group"></div>
             <div className="w-1/6 bg-[#E8E6D1] rounded-t-full h-[75%] relative group"></div>
             <div className="w-1/6 bg-[#E8E6D1] rounded-t-full h-[80%] relative group"></div>
             <div className="w-1/6 h-[90%] flex flex-col gap-1">
                 <div className="flex-1 bg-[#E8E6D1] rounded-t-full rounded-b-xl"></div>
                 <div className="h-1/3 bg-[#FBBF55] rounded-t-xl rounded-b-full"></div>
             </div>
             <div className="w-1/6 h-full flex flex-col gap-1">
                  <div className="h-14 w-full bg-[#E8E6D1] rounded-full"></div>
                  <div className="flex-1 bg-[#FBBF55] rounded-full"></div>
             </div>
          </div>
           <div className="flex justify-between px-2 text-[10px] font-bold opacity-40 mt-2">
              <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Q1</span><span>Q2</span>
           </div>
        </BentoCard>

        {/* Department Budget Distribution */}
        <BentoCard className="lg:col-span-4 bg-[var(--mathical-card-yellow)] p-6 text-[var(--mathical-text-dark)] flex flex-col" delay={0.7}>
             <div className="flex justify-between items-start mb-6">
            <div>
               <div className="text-xs font-bold uppercase opacity-60">Allocations</div>
               <div className="text-2xl font-black mt-1 leading-none">BUDGET DISTRIBUTION</div>
            </div>
             <div className="p-2 hover:bg-black/5 rounded-full cursor-pointer">
                <div className="w-1 h-1 bg-black rounded-full mb-0.5"></div>
                <div className="w-1 h-1 bg-black rounded-full mb-0.5"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Abstract Block Chart */}
          <div className="flex-1 grid grid-cols-2 gap-2">
             <div className="bg-[#D9F958] rounded-[2rem] col-span-2 h-24 flex items-center justify-center font-bold text-black/50">Engineering</div>
             <div className="bg-[#FBBF55] rounded-[2rem] row-span-2 flex items-center justify-center font-bold text-black/50">Sales</div>
             <div className="bg-[var(--mathical-accent)] rounded-[2rem] row-span-2 flex items-center justify-center font-bold text-white/80">Design</div>
             <div className="bg-[#FBBF55] rounded-[2rem] h-32 flex items-center justify-center font-bold text-black/50">HR</div>
             
       
          </div>
        </BentoCard>

        {/* Upcoming Reviews Panel */}
        <BentoCard className="lg:col-span-4 bg-[var(--mathical-accent)] p-6 text-[var(--mathical-text-dark)] flex flex-col relative overflow-hidden group" delay={0.8}>
           <div className="flex justify-between items-start mb-4 z-10">
             <div>
                <div className="text-xs font-bold uppercase opacity-60">This Month</div>
                <div className="text-3xl font-black mt-1 leading-none tracking-tight">REVIEWS</div>
             </div>

           </div>

           {/* Tall Bars Chart - Visualizing Review Load */}
           <div className="flex-1 flex gap-3 h-full items-end z-10 pt-8 pb-4 pl-4 overflow-x-auto">
               <div className="w-16 h-[60%] bg-pink-400/50 rounded-full relative group hover:bg-pink-400/70 transition-colors"></div>
               <div className="w-16 h-[80%] bg-pink-400/50 rounded-full relative group hover:bg-pink-400/70 transition-colors"></div>
               <div className="w-16 h-[40%] bg-pink-400/50 rounded-full relative group hover:bg-pink-400/70 transition-colors"></div>
           </div>

           <div className="absolute right-4 bottom-2 -translate-y-1/2 bg-black/80 rounded-full p-3 text-white z-20 cursor-pointer hover:scale-110 transition-transform">
              <ArrowRight className="w-6 h-6" />
           </div>
        </BentoCard>
      </div>
    </div>
  );
}
