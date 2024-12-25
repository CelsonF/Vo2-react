import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface FormData {
    weight: number;
    gender: number;
    age: number;
    time: number;
    heartRate: number;
}

export default function CalculatorVo2() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [vo2Max, setVo2Max] = useState<number | null>(null);

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const { weight, gender, age, time, heartRate } = data;
        const vo2 = 132.853 - (0.0769 * weight) - (0.3877 * age) + (6.315 * gender) - (3.2649 * time) - (0.1565 * heartRate);
        setVo2Max(vo2);
    };

    return (
        <form className="space-y-6 md:w-10/12 flex flex-col  px-4 mb-6 " onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-gray-900 mx-auto max-w-screen-xl text-center dark:text-white text-3xl font-extrabold mb-2">Calculadora VO<sup>2</sup> Máximo - Teste de Rockport</h1>
            <div>
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecione um Genero</label>
                <Controller
                    name="gender"
                    control={control}
                    defaultValue={1}
                    render={({ field }) => (
                        <select {...field} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value={1}>Homem</option>
                            <option value={0}>Mulher</option>
                        </select>
                    )}
                />
            </div>
            <div>
                <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Peso em (kg):
                </label>
                <Controller
                    name="weight"
                    control={control}
                    rules={{ required: 'Peso é obrigatório' }}
                    render={({ field }) => (
                        <input 
                            type="number"
                            id="weight" 
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    )}
                />
                {errors.weight && <span className="text-red-500 text-sm">{errors.weight.message}</span>}
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Idade:
                </label>
                <Controller
                    name="age"
                    control={control}
                    rules={{ required: 'Idade é obrigatória', min: { value: 1, message: 'Idade mínima é 1' }, max: { value: 120, message: 'Idade máxima é 120' } }}
                    render={({ field }) => (
                        <input 
                            type="number" 
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    )}
                />
                {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tempo (minutos):
                </label>
                <Controller
                    name="time"
                    control={control}
                    rules={{ required: 'Tempo é obrigatório', pattern: { value: /^[0-9\b]+$/, message: 'Tempo deve ser um número' } }}
                    render={({ field }) => (
                        <input 
                            type="number"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    )}
                />
                {errors.time && <span className="text-red-500 text-sm">{errors.time.message}</span>}
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Frequência Cardiaca (bpm):
                </label>
                <Controller
                    name="heartRate"
                    control={control}
                    rules={{ required: 'Frequência Cardiaca é obrigatória', pattern: { value: /^[0-9\b]+$/, message: 'Frequência Cardiaca deve ser um número' } }}
                    render={({ field }) => (
                        <input 
                            type="number" 
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    )}
                />
                {errors.heartRate && <span className="text-red-500 text-sm">{errors.heartRate.message}</span>}
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Calcular VO<sup>2</sup> Máximo</button>
            {vo2Max !== null && (
                <div className="py-4 text-3xl font-extrabold text-gray-900 dark:text-white">
                    <h2>Seu VO<sup>2</sup> Máximo é: {vo2Max.toFixed(5)} mL/kg/min</h2>
                </div>
            )}
        </form>
    )
}