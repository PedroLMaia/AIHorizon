"use client";

import axios from "axios";
import * as z from "zod";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { Heading } from "@/components/heading";
import {
    Form,
    FormControl,
    FormField,
    FormItem
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

import { formSchema } from "./constants";
import { useState } from "react";

const MusicaPage = () => {
    const router = useRouter();
    const [musica, setMusica] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          prompt: "",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setMusica(undefined);

            const response = await axios.post('/api/musica', values);
            console.log(response)

            setMusica(response.data.audio);
            form.reset();
        } catch (error: any) {
            // TODO: Open Pro Modal
            console.log(error);
        } finally {
            router.refresh();
        }
    }

    return (
        <div>
            <Heading
                title="Gerador de Música"
                description="Gerador de Música mais avançado."
                icon={Music}
                iconColor="text-green-500"
                bgColor="bg-green-500/10"
            />
            <div className="px-4 lg:px-8">
                <div className="px-4 lg:px-8">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                            rounded-lg 
                            border 
                            w-full 
                            p-4 
                            px-3 
                            md:px-6 
                            focus-within:shadow-sm
                            grid
                            grid-cols-12
                            gap-2
                          "
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="Piano solo"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                                Gerar
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {isLoading && (
                        <div className="p-20">
                            <Loader />
                        </div>
                    )}
                    {!musica && !isLoading && (
                        <Empty label="No music generated." />
                    )}
                    {musica && (
                        <audio controls className="w-full mt-8">
                            <source src={musica} />
                        </audio>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MusicaPage;