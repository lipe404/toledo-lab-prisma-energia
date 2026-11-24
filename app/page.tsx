'use client';
import { useState } from 'react';

const money = new Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL', maximumFractionDigits:0 });
export default function Page(){
 const [bill,setBill]=useState(450);
 const [sun,setSun]=useState('typical');
 const rates:Record<string,number>={shade:.44,typical:.66,sun:.79};
 const estimate=bill*rates[sun];
 return <><header><a className="brand" href="#">◩ PRISMA<span>ENERGIA</span></a><a href="#simular">Abrir simulador</a></header>
 <main><section className="hero"><div className="intro"><p className="tag">PROJETO CONCEITUAL / ENERGIA SOLAR</p><h1>O sol em<br/>outra luz.</h1><p className="lede">Antes de dimensionar um sistema fotovoltaico, visualize o tamanho da mudança.</p><a className="button" href="#simular">Simular meu cenário</a></div><figure aria-label="Ilustração de módulos solares e disco solar"><div className="orb"/><div className="panel one"/><div className="panel two"/><figcaption>ESTUDO VISUAL / CAPTAÇÃO DE LUZ</figcaption></figure></section>
 <section id="simular" className="sim"><div><p className="tag">PREVISÃO ILUSTRATIVA</p><h2>Qual é o seu cenário?</h2><p>Compare três condições de insolação. Esta demonstração aplica fatores fixos sobre a despesa mensal; não é dimensionamento, orçamento ou promessa de economia.</p></div><div className="controls"><label htmlFor="bill">Conta mensal <strong>{money.format(bill)}</strong></label><input type="range" id="bill" min="100" max="2000" step="25" value={bill} aria-valuetext={money.format(bill)} onChange={e=>setBill(Number(e.target.value))}/><label htmlFor="sun">Exposição do telhado</label><select id="sun" value={sun} onChange={e=>setSun(e.target.value)}><option value="shade">Sombra parcial</option><option value="typical">Insolação moderada</option><option value="sun">Pouca sombra</option></select><output aria-live="polite"><small>ECONOMIA MENSAL NO MODELO</small><strong>{money.format(estimate)}</strong><small>Fator aplicado: {Math.round(rates[sun]*100)}%</small></output></div></section></main>
 <footer><strong>PRISMA ENERGIA</strong><span>Projeto conceitual. Não coleta dados.</span></footer></>;
}
