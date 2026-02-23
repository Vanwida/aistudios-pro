import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        // Dynamic params
        const title = searchParams.get('title') || 'Build smarter AI agents';
        const tag = searchParams.get('tag') || 'aistudios.pro';

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#0a0a0a',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                        fontFamily: 'sans-serif',
                    }}
                >
                    {/* Decorative blur circle */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-10%',
                            left: '-10%',
                            width: '600px',
                            height: '600px',
                            backgroundColor: '#6c5ce7',
                            borderRadius: '50%',
                            filter: 'blur(150px)',
                            opacity: 0.5,
                            zIndex: 0,
                        }}
                    />

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '40px 80px',
                            textAlign: 'center',
                            zIndex: 10,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '12px 24px',
                                marginBottom: '40px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '2px solid rgba(108, 92, 231, 0.4)',
                                borderRadius: '50px',
                                color: '#a29bfe',
                                fontSize: '28px',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                            }}
                        >
                            {tag}
                        </div>

                        <div
                            style={{
                                fontSize: '76px',
                                fontWeight: 800,
                                color: 'white',
                                lineHeight: 1.1,
                                maxWidth: '900px',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {title}
                        </div>

                        <div
                            style={{
                                marginTop: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '32px',
                                color: '#888888',
                                fontWeight: 500,
                            }}
                        >
                            <div
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(to bottom right, #6c5ce7, #a29bfe)',
                                    marginRight: '20px',
                                }}
                            />
                            Vanwida | @vanwidaAI
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
