import React, { useState } from "react";
import Button from "../../fundamentals/button";
import DiscordIcon from "../../fundamentals/icons/discord-icon";
import InputField from "../../molecules/input";
import TextArea from "../../molecules/textarea";

import * as Dialog from "@radix-ui/react-dialog";

type MailDialogProps = {
  onClose: () => void;
  open: boolean;
};

const MailDialog = ({ open, onClose }: MailDialogProps) => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [link, setLink] = useState("mailto:kontakt@viceverse.cz");

  React.useEffect(() => {
    setLink(`mailto:kontakt@viceverse.cz?subject=${encodeURI(subject)}&body=${encodeURI(body)}`);
  }, [subject, body]);

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Overlay className='fixed z-50 grid top-0 left-0 right-0 bottom-0 place-items-end overflow-y-auto'>
        <Dialog.Content className='bg-grey-0 w-[400px] shadow-dropdown rounded-rounded p-8 top-[64px] bottom-2 right-3 fixed flex flex-col justify-between'>
          <div>
            <Dialog.Title className='inter-xlarge-semibold mb-1'>Jak vám můžeme pomoci?</Dialog.Title>
            <Dialog.Description className='inter-small-regular text-grey-50 mb-6'>
              Obvykle odpovídáme do několika hodin
            </Dialog.Description>
            <InputField
              label={"Předmět"}
              value={subject}
              className='mb-4'
              placeholder='O co jde?...'
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextArea
              label={"Zpráva"}
              placeholder='Napište nám svůj dotaz...'
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
              rows={8}
              enableEmoji
            />
          </div>
          <div className='flex flex-col items-center gap-y-base'>
            <a className='w-full' href={link}>
              <Button variant='primary' size='large' className='w-full'>
                Odeslat zprávu
              </Button>
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Root>
  );
};

export default MailDialog;
