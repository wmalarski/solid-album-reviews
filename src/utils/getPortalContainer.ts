export const portalContainerId = "PortalContainer";

export const getPortalContainer = (): HTMLElement | undefined => {
  return document.getElementById(portalContainerId) ?? undefined;
};
