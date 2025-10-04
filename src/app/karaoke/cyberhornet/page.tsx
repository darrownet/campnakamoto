export default function Page() {
  return (
      <div style={{width:'100%', height:'100vh', position:'relative'}}>
        <iframe src="https://wave-form.app/cyberhornets" style={{width:'100%', height: '100%', border: 0}} title="Cyberhornets"></iframe>
      </div>
  );
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
