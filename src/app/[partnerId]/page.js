import Home from '@/pages/Home';

export default async function Page({ params }) {
    const id = (await params).partnerId;
    console.log("Logs of id:", id)

    return (
        <Home partnerId={id} />
    );
}
