import React from 'react';
import { Container } from '../../layout/Container';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export function Stats() {
  const stats = [
    { id: 1, endValue: 4.9, suffix: "/5", floating: true, label: "متوسط التقييم" },
    { id: 2, endValue: 1000, suffix: "+", floating: false, label: "خدمة منجزة" },
    { id: 3, endValue: 50, suffix: "K+", floating: false, label: "عميل راضٍ" },
  ];

  return (
    <SectionWrapper id="stats" className="bg-primary/5 py-10 md:py-12 border-y border-slate-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                <AnimatedCounter 
                  endValue={stat.endValue} 
                  suffix={stat.suffix} 
                  floating={stat.floating} 
                />
              </div>
              <div className="text-slate-600 font-semibold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
