import { BatchJob } from "@medusajs/medusa/dist";

export enum BatchJobOperation {
  Import = "Import",
  Export = "Export",
}

export function batchJobDescriptionBuilder(
  batchJob: BatchJob,
  operation: BatchJobOperation,
  elapsedTime?: number,
): string {
  let description = "";

  const entityName = batchJob.type.split("-").reverse().pop();

  const twentyfourHoursInMs = 24 * 60 * 60 * 1000;

  switch (batchJob.status) {
    case "failed":
      description = `${operation}s ${entityName}s se nezdařila.`;
      break;
    case "canceled":
      description = `${operation}s ${entityName}s byla zrušena.`;
      break;
    case "completed":
      if (elapsedTime && Math.abs(elapsedTime) > twentyfourHoursInMs) {
        description = `Soubor ${operation} již není k dispozici. Soubor bude uložen pouze po dobu 24 hodin.`;
        break;
      } else {
        description = `${operation}s ${entityName}s je dokončena.`;
        break;
      }
    case "processing":
      description = `Zpracovává se ${operation} z ${entityName}s. Kartu aktivity můžete bezpečně zavřít. Jakmile bude export připraven ke stažení, upozorníme vás na to.`;
      break;
    case "confirmed":
      description = `${operation}s ${entityName}s byla potvrzena a bude brzy zahájena.`;
      break;
    case "pre_processed":
      description = `Připravuje se ${operation} z ${entityName}s.`;
      break;
    default:
      description = `${operation}s ${entityName}s byla vytvořena a bude brzy spuštěna.`;
  }

  return description;
}
