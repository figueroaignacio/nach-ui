import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const name = searchParams.get('name') ?? 'Bricks';
  const description = searchParams.get('description') ?? '';
  const count = searchParams.get('count') ?? '';

  const fontSize = name.length > 40 ? 48 : name.length > 25 ? 56 : 64;
  const truncatedDesc = description.length > 120 ? `${description.slice(0, 120)}...` : description;

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        backgroundColor: '#09090b',
        display: 'flex',
        flexDirection: 'column',
        padding: '72px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`v${i}`}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: ((i + 1) * 1200) / 9,
            width: 1,
            backgroundColor: '#18181b',
          }}
        />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={`h${i}`}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: ((i + 1) * 630) / 5,
            height: 1,
            backgroundColor: '#18181b',
          }}
        />
      ))}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 52,
          fontFamily: 'monospace',
        }}
      >
        <span style={{ color: '#6366f1', fontSize: 13, letterSpacing: '0.12em' }}>NACHUI</span>
        <span style={{ color: '#3f3f46', fontSize: 13 }}>/</span>
        <span style={{ color: '#52525b', fontSize: 13, letterSpacing: '0.08em' }}>BRICKS</span>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            backgroundColor: '#0f172a',
            border: '1px solid #1e3a5f',
            borderRadius: 6,
            padding: '4px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#38bdf8' }} />
          <span
            style={{
              color: '#38bdf8',
              fontSize: 12,
              fontFamily: 'monospace',
              letterSpacing: '0.1em',
            }}
          >
            UI COMPONENTS
          </span>
        </div>
        {count && (
          <div
            style={{
              backgroundColor: '#18181b',
              border: '1px solid #3f3f46',
              borderRadius: 6,
              padding: '4px 12px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: '#71717a',
                fontSize: 12,
                fontFamily: 'monospace',
                letterSpacing: '0.08em',
              }}
            >
              {count} COMPONENTS
            </span>
          </div>
        )}
      </div>

      <div style={{ width: 44, height: 2, backgroundColor: '#6366f1', marginBottom: 32 }} />

      <div
        style={{
          fontSize,
          fontWeight: 600,
          color: '#f4f4f5',
          lineHeight: 1.12,
          letterSpacing: '-0.025em',
          marginBottom: 24,
          maxWidth: 960,
          fontFamily: 'sans-serif',
        }}
      >
        {name}
      </div>

      {truncatedDesc && (
        <div
          style={{
            fontSize: 21,
            color: '#71717a',
            lineHeight: 1.55,
            maxWidth: 800,
            fontFamily: 'sans-serif',
          }}
        >
          {truncatedDesc}
        </div>
      )}

      <div
        style={{
          position: 'absolute',
          bottom: 56,
          left: 80,
          right: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'monospace',
        }}
      >
        <span style={{ color: '#3f3f46', fontSize: 13, letterSpacing: '0.05em' }}>
          nachui.tech/bricks
        </span>
        <div style={{ display: 'flex', gap: 7 }}>
          {[true, false, false].map((accent, i) => (
            <div
              key={i}
              style={{
                width: 7,
                height: 7,
                borderRadius: 4,
                backgroundColor: accent ? '#6366f1' : '#27272a',
              }}
            />
          ))}
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
