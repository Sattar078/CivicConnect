import React, { useState, useEffect } from 'react'
import { registerSW } from 'virtual:pwa-register'

const UpdateNotification = () => {
  const [needRefresh, setNeedRefresh] = useState(false)
  const [offlineReady, setOfflineReady] = useState(false)
  const [updateSW, setUpdateSW] = useState(null)

  useEffect(() => {
    const updateSWFn = registerSW({
      onNeedRefresh() {
        setNeedRefresh(true)
      },
      onOfflineReady() {
        setOfflineReady(true)
      },
    })
    setUpdateSW(() => updateSWFn)
  }, [])

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  if (!offlineReady && !needRefresh) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col gap-2 max-w-sm animate-fade-in-up">
      <div className="text-sm text-gray-600 dark:text-gray-300">
        {offlineReady
          ? 'App ready to work offline'
          : 'New content available, click on update button to reload.'}
      </div>
      <div className="flex gap-2 justify-end">
        {needRefresh && (
          <button
            className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded transition-colors"
            onClick={() => updateSW(true)}
          >
            Update
          </button>
        )}
        <button
          className="px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs font-bold rounded transition-colors"
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default UpdateNotification