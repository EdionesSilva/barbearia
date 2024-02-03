import { db } from "@/app/_lib/prisma";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    }
}

const BarbeshopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    if (!params.id) {
        // TODO: Redirecionar para home page
        return null;
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
    })

    if (!barbershop) {
        // TODO: Redirecionar para home
        return null;
    }

    return <h1>{barbershop.name}</h1>;
};
 
export default BarbeshopDetailsPage;
