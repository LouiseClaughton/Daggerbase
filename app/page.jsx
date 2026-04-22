import { createClient } from '@/lib/supabase/server';
import Card from './components/card';
import Sidebar from './components/sidebar';

export default async function Dashboard() {
    const supabase = await createClient()
    const { data: campaigns } = await supabase.from('Campaigns').select();
    const { data: oneShots } = await supabase.from('One-Shots').select();

    return (
        <div className="h-screen w-full flex">
        <Sidebar />
        <div className="bg-black w-[75%] h-full">
            <div className="grid grid-cols-3 gap-8 py-6 px-8 max-h-screen overflow-scroll">
            {campaigns.map(campaign => (
                <Card
                key={campaign.id}
                title={campaign.title}
                />
            ))}
            {oneShots.map(oneShot => (
                <Card
                key={oneShot.id}
                title={oneShot.title}
                />
            ))}
            </div>
        </div>
        </div>
    );
}

