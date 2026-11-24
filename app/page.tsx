'use client';
import { useState } from 'react';

const asset = (file: string) => (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/" + file;
const factors = [
  { icon:"sun", title:"Horas de luz", copy:"A geração muda ao longo do dia e do ano. Inclinação, orientação e sombras alteram a energia que chega aos módulos." },
  { icon:"meter", title:"Perfil de consumo", copy:"Duas contas iguais podem esconder rotinas bem diferentes. Consumo durante o dia e meses de pico ajudam a ler o potencial de autoconsumo." },
  { icon:"grid", title:"Regras da rede", copy:"Tarifas, cobranças da distribuidora e condições de compensação entram na análise antes de estimar economia." },
];
function FactorIcon({ icon }: { icon: string }) {
 const paths: Record<string,string> = {
  sun:"M24 7v5m0 24v5M7 24h5m24 0h5M12 12l4 4m16 16 4 4m0-24-4 4M16 32l-4 4M17 24a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z",
  meter:"M8 38V10h32v28H8Zm8-8 8-12 6 6 4-7M14 34h20",
  grid:"M8 9h32v30H8ZM8 19h32M8 29h32M19 9v30M30 9v30",
 };
 return <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true"><path d={paths[icon]} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
const money = new Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL', maximumFractionDigits:0 });
export default function Page(){
 const [bill,setBill]=useState(450);
 const [sun,setSun]=useState('typical');
 const rates:Record<string,number>={shade:.44,typical:.66,sun:.79};
 const estimate=bill*rates[sun];
 return <><header><a className="brand" href="#">◩ PRISMA<span>ENERGIA</span></a><a href="#simular">Abrir simulador</a></header>
 <main><section className="hero"><div className="intro"><p className="tag">PROJETO CONCEITUAL / ENERGIA SOLAR</p><h1>O sol em<br/>outra luz.</h1><p className="lede">Antes de dimensionar um sistema fotovoltaico, visualize o tamanho da mudança.</p><a className="button" href="#simular">Simular meu cenário</a></div><figure className="solar-hero"><img src={asset("prisma-hero.webp")} alt="Painéis solares no telhado de uma casa em um bairro arborizado" width="1600" height="1067" fetchPriority="high"/><figcaption>CAPTAÇÃO DE LUZ / FOTO DE REFERÊNCIA</figcaption></figure></section>
 <section id="simular" className="sim"><div><p className="tag">PREVISÃO ILUSTRATIVA</p><h2>Qual é o seu cenário?</h2><p>Compare três condições de insolação. Esta demonstração aplica fatores fixos sobre a despesa mensal; não é dimensionamento, orçamento ou promessa de economia.</p></div><div className="controls"><label htmlFor="bill">Conta mensal <strong>{money.format(bill)}</strong></label><input type="range" id="bill" min="100" max="2000" step="25" value={bill} aria-valuetext={money.format(bill)} onChange={e=>setBill(Number(e.target.value))}/><label htmlFor="sun">Exposição do telhado</label><select id="sun" value={sun} onChange={e=>setSun(e.target.value)}><option value="shade">Sombra parcial</option><option value="typical">Insolação moderada</option><option value="sun">Pouca sombra</option></select><output aria-live="polite"><small>ECONOMIA MENSAL NO MODELO</small><strong>{money.format(estimate)}</strong><small>Fator aplicado: {Math.round(rates[sun]*100)}%</small></output></div></section>
 <section className="fieldbook" aria-labelledby="field-title"><div className="field-intro"><p className="tag">CADERNO DE CAMPO / ANTES DO PROJETO</p><h2 id="field-title">O que o teto não conta.</h2><p>Passar da curiosidade para um projeto exige mais do que ler o valor de uma fatura.</p></div><div className="factors">{factors.map(f=><article key={f.icon}><FactorIcon icon={f.icon}/><h3>{f.title}</h3><p>{f.copy}</p></article>)}</div></section>
 <section className="roof-study" aria-labelledby="roof-title"><figure><img src={asset("prisma-detail.webp")} alt="Módulos fotovoltaicos acompanhando a inclinação de um telhado" width="1150" height="767" loading="lazy"/><figcaption>DETALHE / INSTALAÇÃO EM TELHADO</figcaption></figure><div><svg width="132" height="90" viewBox="0 0 132 90" aria-hidden="true"><path d="M8 70h116M18 68l67-39 35 39m-84-11 11 10m8-22 11 22m8-33 12 34m-45-7 55-22" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="34" cy="22" r="11" fill="#eab53e"/><path d="m46 26 9 4m-7-13 8-3m-18-7 2-6m-23 21-8 1" stroke="#a07010" strokeWidth="2"/></svg><p className="tag">ESTUDO / SUPERFÍCIE E SOMBRA</p><h2 id="roof-title">Um telhado, vários ângulos.</h2><p>Chaminés, árvores e edificações próximas podem mudar a insolação entre manhã e tarde. Avalie as sombras em horários diferentes antes de propor a posição dos módulos.</p></div></section>
 <section className="basics" aria-labelledby="basics-title"><p className="tag">PERGUNTAS PARA LEVAR À VISITA TÉCNICA</p><h2 id="basics-title">Antes de falar em placas.</h2><details><summary>O que reunir para uma análise real?</summary><p>Separe as faturas dos últimos 12 meses, identifique o padrão de consumo e reúna informações sobre área disponível, inclinação e sombras recorrentes.</p></details><details><summary>Por que o simulador não estima o retorno?</summary><p>Esta página aplica fatores fixos para demonstrar a interface. Não considera investimento, custos de manutenção, tarifa, perdas ou geração real do telhado.</p></details></section></main>
 <footer><strong>PRISMA ENERGIA</strong><span>Projeto conceitual. Não coleta dados.</span><details className="credits"><summary>Créditos fotográficos</summary><p><a href="https://www.pexels.com/photo/a-house-with-solar-panel-on-the-roof-12243093/">Robert So</a> · <a href="https://www.pexels.com/photo/solar-panels-on-house-roof-17762230/">Budget Bizar</a> · <a href="https://www.pexels.com/license/">Pexels</a></p></details></footer></>;
}
