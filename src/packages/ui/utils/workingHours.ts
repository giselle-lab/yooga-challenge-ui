export interface WorkingHours {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}

export function isOpen(workingHours: WorkingHours): string {
    // Obter o dia atual e horário atual
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Domingo, 1 = Segunda-feira, etc.
    const currentHour = today.getHours();
    const currentMinute = today.getMinutes();

    // Mapear os dias da semana para os nomes
    const daysOfWeek = [
        "sunday", "monday", "tuesday", "wednesday", 
        "thursday", "friday", "saturday"
    ];

    // Obter o horário de funcionamento para o dia atual
    const todayHours = workingHours[daysOfWeek[currentDay]];

    // Verificar se a loja está fechada
    if (todayHours === "Closed") {
        return "Fechado";
    }

    // Caso contrário, verifique os horários de abertura e fechamento
    const [start, end] = todayHours.split(" - ").map(time => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes; // Converter para minutos
    });

    // Calcular o horário atual em minutos
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    // Verificar se o horário atual está dentro do intervalo de funcionamento
    if (currentTimeInMinutes >= start && currentTimeInMinutes < end) {
        return "Aberto";
    } else {
        return "Fechado";
    }
}
