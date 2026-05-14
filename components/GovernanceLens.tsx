const questions = ["What can this tool access?","What can it change?","What can go wrong?","Who approves it?","What evidence is logged?","Can it be stopped?","Can it be rolled back?"];
export function GovernanceLens() {
  return <div className="grid gap-4 md:grid-cols-2">{questions.map((question)=><div key={question} className="rounded-2xl border border-radar-blue/20 bg-radar-blue/10 p-5 text-white">{question}</div>)}</div>;
}
