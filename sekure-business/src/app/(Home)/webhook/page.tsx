"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const Webhook: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };


  return (
    <section className="wrapper">
      <div className="flex-1 flex flex-col rounded-[10px] h-[560px] 2xl:h-[705px] bg-white pt-11 pl-10 pb-44">
        <div className="w-[791px]">
          <div className="flex-between">
            <div>
              <h2 className="text-base font-semibold">Clés API</h2>
              <p className="text-xs font-light text-placeholder-text mt-1">Ces clés vous permettront d’authentifier les demandes d’API</p>
            </div>

            <Button className="bg-primary w-[178px] text-white rounded-[8px] text-[12px] leading-[34.5px] -tracking-[0.5%]">
              Générer de nouvelles clés
            </Button>
          </div>
          <div className="flex-between mt-6 w-full">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-light text-[#BFBFBF]">Clé Publique</Label>
              <div className="relative">
                <Input
                  type='password'
                  defaultValue="thisisyourpublickey"
                  readOnly
                  className="w-[382px] h-[40px] border border-[#E0E0E0] rounded-[8px] px-4 pr-10 py-2 text-sm font-light text-[#BFBFBF] read-only"
                />
                <div className="absolute top-0 right-3 flex w-3 h-[40px] items-center justify-center">
                  <Image
                    src="/assets/icons-pack-2/copy.svg"
                    alt="copy-icon"
                    width={11}
                    height={12}
                    className="object-contain"
                    />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-light text-[#BFBFBF]">Clé Secrete</Label>
              <div className="relative">
                <Input
                  type='password'
                  readOnly
                  defaultValue="thisisyourpublickey"
                  className="w-[382px] h-[40px] border border-[#E0E0E0] rounded-[8px] px-4 pr-10 py-2 text-sm font-light text-[#BFBFBF] read-only"
                />
                <div className="absolute top-0 right-0 flex w-9 h-[40px] items-center justify-center">
                  <Image
                    src="/assets/icons-pack-2/copy.svg"
                    alt="copy-icon"
                    width={11}
                    height={12}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-between mt-10">
            <div>
              <h2 className="text-base font-semibold">Webhooks</h2>
              <p className="text-xs font-light text-placeholder-text mt-1">Vous trouverez ci-dessous vos paramètres de webhook prédéfinis</p>
            </div>

            <Button className="bg-primary w-[178px] text-white rounded-[8px] text-[12px] leading-[34.5px] -tracking-[0.5%]">
              Modifier le webhook            
            </Button>
          </div>
          <div className="flex-between mt-6 w-full">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-light text-[#BFBFBF]">URL</Label>
              <div className="relative">
                <Input
                  type='password'
                  defaultValue="thisisyourpublickey"
                  readOnly
                  className="w-[382px] h-[40px] border border-[#E0E0E0] rounded-[8px] px-4 pr-10 py-2 text-sm font-light text-[#BFBFBF] read-only"
                />
                <div className="absolute top-0 right-3 flex w-3 h-[40px] items-center justify-center">
                  <Image
                    src="/assets/icons-pack-2/copy.svg"
                    alt="copy-icon"
                    width={11}
                    height={12}
                    className="object-contain"
                    />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-light text-[#BFBFBF]">Hachage secret</Label>
              <div className="relative">
                <Input
                  type='password'
                  readOnly
                  defaultValue="thisisyourpublickey"
                  className="w-[382px] h-[40px] border border-[#E0E0E0] rounded-[8px] px-4 pr-10 py-2 text-sm font-light text-[#BFBFBF] read-only"
                />
                <div className="absolute top-0 right-0 flex w-9 h-[40px] items-center justify-center">
                  <Image
                    src="/assets/icons-pack-2/copy.svg"
                    alt="copy-icon"
                    width={11}
                    height={12}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-between mt-3 w-full">
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-light text-[#BFBFBF]">URL</Label>
              <div className="relative">
                <Input
                  type='password'
                  defaultValue="thisisyourpublickey"
                  readOnly
                  className="w-[382px] h-[40px] border border-[#E0E0E0] rounded-[8px] px-4 pr-10 py-2 text-sm font-light text-[#BFBFBF] read-only"
                />
                <div className="absolute top-0 right-3 flex w-3 h-[40px] items-center justify-center">
                  <Image
                    src="/assets/icons-pack-2/copy.svg"
                    alt="copy-icon"
                    width={11}
                    height={12}
                    className="object-contain"
                    />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs font-light text-[#BFBFBF]">Hachage secret</Label>
              <div className="relative">
                <Input
                  type='password'
                  readOnly
                  defaultValue="thisisyourpublickey"
                  className="w-[382px] h-[40px] border border-[#E0E0E0] rounded-[8px] px-4 pr-10 py-2 text-sm font-light text-[#BFBFBF] read-only"
                />
                <div className="absolute top-0 right-0 flex w-9 h-[40px] items-center justify-center">
                  <Image
                    src="/assets/icons-pack-2/copy.svg"
                    alt="copy-icon"
                    width={11}
                    height={12}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Webhook;
