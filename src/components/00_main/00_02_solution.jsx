// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   SolutionSection,
//   SectionHeader,
//   SolutionGrid,
//   SolutionCardNew,
//   CardIconArea,
//   CardContent,
//   CardNumber,
//   CardTitleNew,
//   CardDescription,
//   CardTagList,
//   CardTagItem,
//   CardArrow,
//   SolutionBadge,
// } from "../../styles/Solution.styles";

// // 아이콘 컴포넌트들
// const MonitoringIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <rect x="2" y="3" width="20" height="14" rx="2" />
//     <path d="M8 21h8M12 17v4" />
//     <path d="M6 8h.01M9 8h.01M6 11h12" />
//   </svg>
// );

// const EnergyIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
//   </svg>
// );

// const SafetyIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//     <path d="M9 12l2 2 4-4" />
//   </svg>
// );

// const AIIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <circle cx="12" cy="12" r="3" />
//     <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
//   </svg>
// );

// const IoTIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <circle cx="12" cy="12" r="2" />
//     <path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49" />
//     <path d="M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14" />
//   </svg>
// );

// const solutionData = [
//   {
//     number: "01",
//     title: "Nextcare-M",
//     subtitle: "Monitoring",
//     description:
//       "네트워크, 서버, 애플리케이션, 데이터베이스 등 IT 자원을 하나의 화면에서 실시간 모니터링하고 장애 대응까지 지원하는 통합 관제 솔루션",
//     path: "/solutions/nextcare-m",
//     icon: MonitoringIcon,
//     tags: ["서버/네트워크", "보안 장비", "통신망", "통합 서비스"],
//     color: "#128AB0",
//     badge: "CORE",
//   },
//   {
//     number: "02",
//     title: "Nextcare-E",
//     subtitle: "Energy",
//     description:
//       "전기, 열, 가스 등의 에너지 사용을 실시간으로 분석하고, 설비 최적 제어를 통해 에너지의 합리적 소비를 실현하는 솔루션",
//     path: "/solutions/nextcare-e",
//     icon: EnergyIcon,
//     tags: ["건축물", "공장", "발전소", "주거 단지"],
//     color: "#27ae60",
//   },
//   {
//     number: "03",
//     title: "Nextcare-S",
//     subtitle: "Safety",
//     description:
//       "작업자의 위치와 위험 요소를 실시간으로 감지하고 중대산업 안전사고를 예방/방지하기 위한 산업 현장 전용 안전 솔루션",
//     path: "/solutions/nextcare-s",
//     icon: SafetyIcon,
//     tags: ["작업 환경", "작업자 안전", "작업 관리", "설비 안전"],
//     color: "#e67e22",
//     badge: "NEW",
//   },
//   {
//     number: "04",
//     title: "Nextcare-AI",
//     subtitle: "Artificial Intelligence",
//     description:
//       "머신러닝과 컴퓨터 비전을 기반으로 데이터 수집 및 분석하고 예측 모델링을 통해 운영 효율을 극대화하는 인공지능 최적화 솔루션",
//     path: "/solutions/nextcare-ai",
//     icon: AIIcon,
//     tags: ["AI 챗봇", "영상 분석", "예측 분석", "AI 리포트"],
//     color: "#9b59b6",
//   },
//   {
//     number: "05",
//     title: "Nextcare-IoT",
//     subtitle: "Internet of Things",
//     description:
//       "다양한 장비와 센서를 연결해 실시간 상태를 원격으로 관제하고, 운영 이력을 기록/관리하는 IoT 기반 관제 솔루션",
//     path: "/solutions/nextcare-iot",
//     icon: IoTIcon,
//     tags: ["스마트 팜/홈", "설비 자동화", "센서 관리", "원격 제어"],
//     color: "#3498db",
//   },
// ];

// const Solution = () => {
//   const navigate = useNavigate();
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleCardClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <SolutionSection>
//       <SectionHeader>
//         <span className="label">SOLUTIONS</span>
//         <h2>
//           산업 현장의 <span className="highlight">디지털 혁신</span>을 이끕니다
//         </h2>
//         <p>
//           넥스트코어는 최고의 기술력으로 고객 맞춤형 통합 관제 솔루션을
//           제공합니다.
//           <br />각 솔루션은 독립적으로 운영되거나 통합하여 시너지를 낼 수
//           있습니다.
//         </p>
//       </SectionHeader>

//       <SolutionGrid>
//         {solutionData.map((item, index) => (
//           <SolutionCardNew
//             key={index}
//             $themeColor={item.color}
//             $isHovered={hoveredIndex === index}
//             onClick={() => handleCardClick(item.path)}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {item.badge && (
//               <SolutionBadge $type={item.badge}>{item.badge}</SolutionBadge>
//             )}
//             <CardIconArea $themeColor={item.color}>
//               <item.icon />
//             </CardIconArea>
//             <CardContent>
//               <CardNumber $themeColor={item.color}>{item.number}</CardNumber>
//               <CardTitleNew>
//                 {item.title}
//                 <span className="subtitle">{item.subtitle}</span>
//               </CardTitleNew>
//               <CardDescription>{item.description}</CardDescription>
//               <CardTagList>
//                 {item.tags.map((tag, tagIndex) => (
//                   <CardTagItem key={tagIndex} $themeColor={item.color}>
//                     {tag}
//                   </CardTagItem>
//                 ))}
//               </CardTagList>
//             </CardContent>
//             <CardArrow $themeColor={item.color}>
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
//               </svg>
//             </CardArrow>
//           </SolutionCardNew>
//         ))}
//       </SolutionGrid>
//     </SolutionSection>
//   );
// };

// export default Solution;
