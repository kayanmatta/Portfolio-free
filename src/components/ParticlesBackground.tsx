// src/components/ParticlesBackground.tsx

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim'; // Carrega a versão leve

const ParticlesBackground: React.FC = () => {
  // Função para carregar o motor do particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: 'fixed', // Garante que cubra a tela
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Coloca atrás de todo o conteúdo
      }}
      options={{
        background: {
          color: {
            value: '#0f172a', // <-- CORRIGIDO para bater com --bg-dark
          },
        },
        fpsLimit: 30, // Reduzido de 60 para 30 para melhorar performance
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab', // Efeito de conexão ao passar o mouse
            },
            onClick: {
              enable: true,
              mode: 'push', // Adiciona partículas ao clicar
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.8,
              },
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#6366f1', // Nova cor primária (indigo)
          },
          links: {
            color: '#8b5cf6', // Nova cor secundária (violet)
            distance: 150,
            enable: true,
            opacity: 0.4, // Opacidade das linhas aumentada
            width: 1.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false, // Mudado para false para movimento mais previsível
            speed: 0.5, // Reduzido de 2 para 0.5 para movimento mais lento
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200, // Aumentado de 800 para 1200 para reduzir densidade
            },
            value: 50, // Reduzido de 100 para 50 para menos partículas
          },
          opacity: {
            value: 0.5, // Opacidade dos pontos aumentada
            random: false, // Mudado para false para opacidade consistente
            anim: {
              enable: true,
              speed: 0.5, // Reduzido de 1 para 0.5 para animação mais lenta
              opacity_min: 0.1,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 }, // Reduzido tamanho máximo de 4 para 3
            random: true, // Tamanho aleatório
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.5,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;