export interface WorkingHours {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}

export function getStoreStatus(workingHours: WorkingHours): string {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Domingo, 1 = Segunda-feira, 2 = Terça-feira, ..., 6 = Sábado
    const currentDayName = getDayName(currentDay); // Função auxiliar para obter o nome do dia
    const currentHour = today.getHours();
    const currentMinute = today.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    // Função para obter o nome do dia
    function getDayName(day: number): string {
        const daysOfWeek = [
            "sunday", "monday", "tuesday", "wednesday", 
            "thursday", "friday", "saturday"
        ];
        return daysOfWeek[day];
    }

    // Função para verificar se o horário de hoje está aberto
    function isOpenOnDay(day: string): boolean {
        const hours = workingHours[day];
        if (hours === "Closed") return false;

        const [start, end] = hours.split(" - ").map(time => {
            const [hours, minutes] = time.split(":").map(Number);
            return hours * 60 + minutes;
        });

        return currentTimeInMinutes >= start && currentTimeInMinutes < end;
    }

    // Verificar se a loja está aberta hoje
    if (isOpenOnDay(currentDayName)) {
        return "Hoje";
    }

    // Verificar se a loja está aberta amanhã
    const nextDay = getDayName((currentDay + 1) % 7); // Próximo dia da semana (circular)
    if (isOpenOnDay(nextDay)) {
        return "Amanhã";
    }

    // Se não estiver aberta hoje ou amanhã, retornar o próximo dia disponível
    for (let i = 1; i <= 7; i++) {
        const nextDayIndex = (currentDay + i) % 7;
        const nextDayName = getDayName(nextDayIndex);
        if (isOpenOnDay(nextDayName)) {
            return `Próximo ${nextDayName.charAt(0).toUpperCase() + nextDayName.slice(1)}`;
        }
    }

    return "Fechado todos os dias"; // Caso não haja nenhum dia aberto (pode ser útil para mostrar em casos específicos)
}
