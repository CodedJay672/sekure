"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
// import { store, AppStore } from "../_lib/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { makeStore, persistor } from "@/_lib/redux/store";
import { persistStore } from "redux-persist";
import LoadingSpinner from "@/components/Alert/Loading";
import Modal from "@/components/ui/shared/Modal";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const storeRef = useRef<AppStore>();
  // if (!storeRef.current) {
  //   // Create the store instance the first time this renders
  //   storeRef.current = store;
  // }
  // return <Provider store={store}>{children}</Provider>;

  const storeRef = useRef<ReturnType<typeof makeStore> | null>(null);
  const persistorRef = useRef<ReturnType<typeof persistStore> | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate
        loading={
          <Modal>
            <LoadingSpinner />
          </Modal>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
