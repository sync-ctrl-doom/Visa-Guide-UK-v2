import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import adminClientsRouter from "./admin-clients";
import adminDocumentsRouter from "./admin-documents";
import adminMessagesRouter from "./admin-messages";
import adminSettingsRouter from "./admin-settings";
import clientPortalRouter from "./client-portal";
import pushNotificationsRouter from "./push-notifications";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use("/admin", adminClientsRouter);
router.use("/admin", adminDocumentsRouter);
router.use("/admin", adminMessagesRouter);
router.use("/admin", adminSettingsRouter);
router.use("/client", clientPortalRouter);
router.use(pushNotificationsRouter);

export default router;
