import React from 'react';
import { ServiceItem } from '@/types';
import { 
  FaStethoscope, 
  FaEye, 
  FaHeartbeat, 
  FaGraduationCap, 
  FaTree, 
  FaUtensils, 
  FaHandsHelping, 
  FaBuilding 
} from 'react-icons/fa';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ReactElement> = {
  FaStethoscope: <FaStethoscope className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />,
  FaEye: <FaEye className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />,
  FaHeartbeat: <FaHeartbeat className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />,
  FaGraduationCap: <FaGraduationCap className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />,
  FaTree: <FaTree className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />,
  FaUtensils: <FaUtensils className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />,
  FaHandsHelping: <FaHandsHelping className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />,
  FaBuilding: <FaBuilding className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0056A6] to-[#F4B400] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      
      <div>
        <div className="w-16 h-16 rounded-xl bg-[#0056A6]/10 flex items-center justify-center mb-6 group-hover:bg-[#0056A6] transition-colors duration-300">
          {iconMap[service.iconName] || <FaHandsHelping className="text-3xl text-[#0056A6]" />}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0056A6] transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#0056A6]">
        <span>{service.category}</span>
      </div>
    </div>
  );
};
